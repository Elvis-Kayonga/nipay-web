
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

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
  const [waitlistSubmissions, setWaitlistSubmissions] = useState<WaitlistSubmission[]>([]);
  const [investorSubmissions, setInvestorSubmissions] = useState<InvestorSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(waitlistChannel);
      supabase.removeChannel(investorChannel);
    };
  }, []);

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

      if (waitlistResult.data) setWaitlistSubmissions(waitlistResult.data);
      if (investorResult.data) setInvestorSubmissions(investorResult.data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading submissions...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Submissions Dashboard</h1>
      
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
          {waitlistSubmissions.map((submission) => (
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
          ))}
        </TabsContent>
        
        <TabsContent value="investors" className="space-y-4">
          {investorSubmissions.map((submission) => (
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
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SubmissionsDashboard;
