export interface IParams {
  keywords: string;
  pages: string;
}

export interface ITalentsAPIResponse {
  id: number
  user_id: number
  service_id: string
  headline: string
  favorite: boolean
  additional_services: number[]
  allow_bookings: boolean
  seo_properties: any
  booking_rates: any
  stats: Stats
  membership_product_name: string
  locations: any[]
  user: User
  relevant_sample: RelevantSample
  languages: number[]
  voice_age_genders: number[]
  recording_capabilities: number[]
}

export interface Stats {
  water_level: any
  ranking_score: any
  ranking_score_centil: any
  ctr_score: any
  messages_response_rate: any
  messages_median_response_time: any
  offers_posted: any
  offers_liked: any
  favorited_count: any
  reviews_count: any
  reviews_rating: any
  search_ctr: any
  search_impressions: any
  search_actions: any
  unread_bookings_invitations: any
  unread_projects_invitations: any
  bookings_accepted: any
  bookings_accepted_last_year: any
  booked_clients: any
}

export interface User {
  id: number
  public_hash: string
  username: string
  name: string
  last_interaction: string
  roles: string[]
  isAi: boolean
  experiments: string[]
  ui_preferences: UiPreferences
  created_at: string
  updated_at: string
}

export interface UiPreferences {
  hide_blm_popup: boolean
  post_banner_dismissed: boolean
  sovas_banner_dismissed: boolean
  promo_banner_podium2021: boolean
  endorsements_dialog_dismissed: boolean
  search_learn_banner_dismissed: boolean
}

export interface RelevantSample {
  id: number
  name: string
  provider_id: number
  demo_id: number
  additional_info: string
  display_order: number
  is_approved: boolean
  file: string
  additional_services: any[]
  languages: number[]
  is_valid: boolean
  transcript: string
  transcript_status: string
  display_transcript: boolean
  service_id: string
  meta_data: MetaData
  tags: string[]
  created_at: string
  updated_at: string
  reviewed: boolean
  voice_types: number[]
  voice_age_genders: number[]
}

export interface MetaData {
  duration: number
  container: string
  codec: string
  trackInfo: any[]
  codecProfile: string
  numberOfChannels: number
  bitrate: number
  lossless: boolean
  sampleRate: number
  tagTypes: string[]
}

