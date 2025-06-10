
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LogOut, Shield, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import AdminLogin from './AdminLogin';

interface WaitlistSubmission {
  id: string;
  name: string;
  business_name: string;
  email: string;
  phone_number: string;
  monthly_volume: string;
  business_earnings?: string;
  funding_needed?: string;
  interest_rate?: string;
  business_type?: string;
  created_at: string;
}

interface InvestorSubmission {
  id: string;
  name: string;
  email: string;
  organization_name?: string;
  investor_type: string;
  message: string;
  created_at: string;
}

const SubmissionsDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const [waitlistSubmissions, setWaitlistSubmissions] = useState<WaitlistSubmission[]>([]);
  const [investorSubmissions, setInvestorSubmissions] = useState<InvestorSubmission[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!loading && isAdmin) {
      fetchSubmissions();
      
      // Set up real-time subscriptions
      const waitlistChannel = supabase
        .channel('waitlist-changes')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'waitlist_submissions'
          },
          (payload) => {
            setWaitlistSubmissions(prev => [payload.new as WaitlistSubmission, ...prev]);
            toast.success('New waitlist submission received!');
          }
        )
        .subscribe();

      const investorChannel = supabase
        .channel('investor-changes')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'investor_submissions'
          },
          (payload) => {
            setInvestorSubmissions(prev => [payload.new as InvestorSubmission, ...prev]);
            toast.success('New investor inquiry received!');
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(waitlistChannel);
        supabase.removeChannel(investorChannel);
      };
    }
  }, [loading, isAdmin]);

  const fetchSubmissions = async () => {
    try {
      const [waitlistResult, investorResult] = await Promise.all([
        supabase
          .from('waitlist_submissions')
          .select('*')
          .order('created_at', { ascending: false }),
        supabase
          .from('investor_submissions')
          .select('*')
          .order('created_at', { ascending: false })
      ]);

      if (waitlistResult.error) {
        console.error('Error fetching waitlist submissions:', waitlistResult.error);
        toast.error('Failed to load waitlist submissions');
      } else {
        setWaitlistSubmissions(waitlistResult.data || []);
      }

      if (investorResult.error) {
        console.error('Error fetching investor submissions:', investorResult.error);
        toast.error('Failed to load investor submissions');
      } else {
        setInvestorSubmissions(investorResult.data || []);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast.error('Failed to load submissions');
    } finally {
      setDataLoading(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Sign out failed');
    } else {
      toast.success('Signed out successfully');
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nipay-green mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Show login if not authenticated or not admin
  if (!user || !isAdmin) {
    if (user && !isAdmin) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <Card className="w-full max-w-md text-center">
            <CardContent className="p-6">
              <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Access Denied</h2>
              <p className="text-muted-foreground mb-4">
                You don't have admin privileges to access this dashboard.
              </p>
              <Button onClick={handleSignOut} variant="outline">
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }
    
    return <AdminLogin />;
  }

  if (dataLoading) {
    return (
      <div className="flex justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nipay-green mx-auto mb-4"></div>
          <p>Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Submissions Dashboard</h1>
          <div className="flex items-center gap-2 mt-2">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-sm text-muted-foreground">
              Logged in as: {user.email}
            </span>
          </div>
        </div>
        <Button onClick={handleSignOut} variant="outline" size="sm">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
      
      <Tabs defaultValue="waitlist" className="space-y-4">
        <TabsList>
          <TabsTrigger value="waitlist">
            Waitlist ({waitlistSubmissions.length})
          </TabsTrigger>
          <TabsTrigger value="investors">
            Investors ({investorSubmissions.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="waitlist" className="space-y-4">
          {waitlistSubmissions.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">No waitlist submissions yet.</p>
              </CardContent>
            </Card>
          ) : (
            waitlistSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {submission.name}
                    <Badge variant="secondary">
                      {new Date(submission.created_at).toLocaleDateString()}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {submission.business_name} • {submission.email}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Phone:</strong> {submission.phone_number}
                    </div>
                    <div>
                      <strong>Monthly Volume:</strong> {submission.monthly_volume}
                    </div>
                    {submission.business_earnings && (
                      <div>
                        <strong>Business Earnings:</strong> {submission.business_earnings}
                      </div>
                    )}
                    {submission.funding_needed && (
                      <div>
                        <strong>Funding Needed:</strong> {submission.funding_needed}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
        
        <TabsContent value="investors" className="space-y-4">
          {investorSubmissions.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">No investor submissions yet.</p>
              </CardContent>
            </Card>
          ) : (
            investorSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {submission.name}
                    <Badge variant="secondary">
                      {new Date(submission.created_at).toLocaleDateString()}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {submission.email} • {submission.investor_type}
                    {submission.organization_name && ` • ${submission.organization_name}`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <strong>Message:</strong>
                    <p className="mt-2">{submission.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SubmissionsDashboard;
