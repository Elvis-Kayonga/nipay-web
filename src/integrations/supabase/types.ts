export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      investor_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          investor_type: string
          message: string
          name: string
          organization_name: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          investor_type: string
          message: string
          name: string
          organization_name?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          investor_type?: string
          message?: string
          name?: string
          organization_name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      site_config: {
        Row: {
          contact_email: string | null
          created_at: string
          founder_email: string | null
          id: string
          location: string | null
          logo_url: string | null
          meta_keywords: string | null
          phone_number: string | null
          sales_email: string | null
          site_description: string | null
          site_title: string | null
          updated_at: string
        }
        Insert: {
          contact_email?: string | null
          created_at?: string
          founder_email?: string | null
          id?: string
          location?: string | null
          logo_url?: string | null
          meta_keywords?: string | null
          phone_number?: string | null
          sales_email?: string | null
          site_description?: string | null
          site_title?: string | null
          updated_at?: string
        }
        Update: {
          contact_email?: string | null
          created_at?: string
          founder_email?: string | null
          id?: string
          location?: string | null
          logo_url?: string | null
          meta_keywords?: string | null
          phone_number?: string | null
          sales_email?: string | null
          site_description?: string | null
          site_title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      submission_rate_limits: {
        Row: {
          created_at: string
          email: string | null
          id: string
          ip_address: unknown
          submission_count: number
          submission_type: string
          window_start: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          ip_address: unknown
          submission_count?: number
          submission_type: string
          window_start?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          ip_address?: unknown
          submission_count?: number
          submission_type?: string
          window_start?: string
        }
        Relationships: []
      }
      waitlist_submissions: {
        Row: {
          business_earnings: string | null
          business_name: string
          business_type: string | null
          created_at: string
          email: string
          funding_needed: string | null
          id: string
          interest_rate: string | null
          logo_url: string | null
          monthly_volume: string | null
          name: string
          phone_number: string | null
        }
        Insert: {
          business_earnings?: string | null
          business_name: string
          business_type?: string | null
          created_at?: string
          email: string
          funding_needed?: string | null
          id?: string
          interest_rate?: string | null
          logo_url?: string | null
          monthly_volume?: string | null
          name: string
          phone_number?: string | null
        }
        Update: {
          business_earnings?: string | null
          business_name?: string
          business_type?: string | null
          created_at?: string
          email?: string
          funding_needed?: string | null
          id?: string
          interest_rate?: string | null
          logo_url?: string | null
          monthly_volume?: string | null
          name?: string
          phone_number?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_rate_limit: {
        Args: {
          check_ip: unknown
          check_email?: string
          check_type?: string
          max_submissions?: number
          window_minutes?: number
        }
        Returns: boolean
      }
      log_submission_attempt: {
        Args: {
          attempt_ip: unknown
          attempt_email?: string
          attempt_type?: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
