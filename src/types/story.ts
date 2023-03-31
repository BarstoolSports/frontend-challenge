export interface Story {
  access_level: number;
  ads_disabled: number;
  author_is_active: number;
  author: Author;
  blocker_description: string;
  branch_url: string;
  brand_id: number | null;
  brand_name: null | string;
  brand: Brand | null;
  campaign: null;
  category: StoryCategory[];
  comment_count: number;
  comment_status_open: boolean;
  content_tags: ContentTag[];
  date: Date;
  gated_product_id: null;
  hidden_tags: string[];
  id: number;
  is_archive: number;
  is_featured_section: number;
  is_featured: number;
  is_gold: boolean;
  is_hidden: number;
  is_instant_article: number;
  is_membership: number;
  is_pinned: number;
  is_published: number;
  is_search_indexed: number;
  is_show_guide: number;
  nsfw: boolean;
  post_type_meta: PostTypeMeta;
  product: Product;
  sharing: Sharing;
  site_roughnrowdy: number;
  sites: Sites;
  slug: string;
  tag: null | string;
  tags: string[];
  thumbnail: Thumbnail;
  title: string;
  type: StoryType;
  updated_at: Date;
  url: string;
  urls: StoryUrls;
  user_id: string;
  viewability: number;
}

export type Stories = Story[];

export interface Author {
  author_url: string;
  avatar: null | string;
  has_notifications: boolean;
  id: number | null;
  is_active: boolean;
  name: string;
  twitter_handle?: null | string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface StoryCategory {
  id: string;
  name: Name;
  slug: Slug;
}

export enum Name {
  Boston = 'Boston',
  Greenie = 'Greenie',
}

export enum Slug {
  Boston = 'boston',
  Greenie = 'greenie',
}

export interface ContentTag {
  created_at: Date;
  id: string;
  metrics: Metrics;
  slug: string;
  tag: string;
  updated_at: Date;
  visibility: string;
}

export interface Metrics {
  posts: number;
  published_podcast_episodes?: number;
  published_posts: number;
}

export interface PostTypeMeta {
  barstool_original: BarstoolOriginal | null;
  fundraiser: Fundraiser | null;
  gallery: null;
  live: null;
  podcast: PostTypeMetaPodcast | null;
  standard_post: StandardPost;
}

export interface BarstoolOriginal {
  duration: number;
  id: string;
  image: string;
  pre_roll_disabled?: boolean;
  show: BarstoolOriginalShow;
  type: string;
}

export interface BarstoolOriginalShow {
  id: string;
  image: null;
  slug: Slug;
  title: Name;
}

export interface Fundraiser {
  campaign_form: CampaignForm;
  status: string;
}

export interface CampaignForm {
  'donately-account-id'?: string;
  'donately-campaign-id': string;
  'donately-currency'?: string;
  'donately-donor-pays-fees'?: boolean;
  'donately-form-id'?: string;
  'donately-form-navigation'?: string;
  'donately-i18n-locale'?: string;
  'donately-id': string;
  'donately-inner-progress'?: string;
  'donately-outer-progress'?: string;
  'donately-payment-options'?: string;
  'donately-recurring-frequency'?: string;
  'donately-show-donor-number'?: string;
  'donately-show-goal-amount'?: string;
  'donately-show-percent-funded'?: string;
  'google-analytics-id'?: string;
  'stripe-publishable-key'?: string;
}

export interface PostTypeMetaPodcast {
  ad_slots_counts: AdSlotsCounts;
  ad_slots_final: AdSlot[];
  ad_slots_virtual: AdSlotsVirtual[];
  ad_slots: AdSlot[];
  authors: string[];
  brand: Brand;
  created_at: Date;
  date: Date;
  description: string;
  disable_ad_free_base_intro: boolean;
  disable_ad_free_partner_intro: boolean;
  disabled_ad_placements: DisabledAdPlacements;
  duration_string: string;
  duration: number;
  episode_trackers: string[];
  episode_url: string;
  guests: string[];
  guid: string;
  id: string;
  iframe_src: string;
  internal_tags: string[];
  location: null;
  media: Media;
  midroll_enabled: boolean;
  monetization: Monetization;
  montage_final: MontageFinal[];
  montage_status: string;
  montage_updated_at: null;
  montage: string[];
  pipestream_enabled: boolean;
  planned_episode: string;
  podcast: PodcastPodcast;
  publish_notes: null;
  show: PodcastShow;
  status: string;
  tagging_complete: boolean;
  tags: string[];
  time: string;
  title: string;
  updated_at: Date;
}

export interface AdSlot {
  ad_count: number;
  ad: string;
  advertiser: string;
  bumper: null;
  campaign: null | string;
  dai_enabled_offset_strategy: string;
  dai_enabled_offset: number;
  dai_enabled: boolean;
  end_time: number;
  id: string;
  intro: null;
  metadata: AdSlotMetadata;
  outro: null;
  start_time: number;
  status: string;
  type: string;
}

export interface AdSlotMetadata {
  color: string;
  placement: string;
}

export interface AdSlotsCounts {
  count: number;
  dai_enabled_count: number;
  marked_ads_count: number;
}

export interface AdSlotsVirtual {
  _id?: null;
  ad_count: number | null;
  ad: null | string;
  advertiser: AdvertiserClass | string;
  bumper: null;
  campaign: null | string;
  dai_enabled_offset_strategy: string;
  dai_enabled_offset: number | null;
  dai_enabled: boolean;
  end_time: number | null;
  id: null | string;
  intro: null;
  metadata?: AdSlotMetadata;
  outro: null;
  start_time: number | null;
  status?: string;
  type: string;
  virtual?: boolean;
}

export interface AdvertiserClass {
  name: string;
  virtual: boolean;
}

export interface DisabledAdPlacements {
  midroll: boolean;
  postroll: boolean;
  preroll: boolean;
}

export interface Media {
  audio: Audio;
  content_length: number;
  video: string;
}

export interface Audio {
  adswizz_id: null;
  advertisers: string[];
  advertising: Advertising;
  alternate_sources: AlternateSource[];
  amagi: Amagi;
  aspect_ratio: null;
  attribution: null;
  authors: string[];
  brands: string[];
  captured_at: null;
  copyrights: Copyrights;
  created_at: Date;
  cue_points: string[];
  description: null;
  duration: number;
  guests: string[];
  id: string;
  internal_notes: null;
  internal_tags: string[];
  metadata: AudioMetadata;
  montage: string[];
  primary_source: PrimarySource;
  provider_id: string;
  provider_status: string;
  provider: string;
  status: string;
  subtitles: string[];
  tagging_complete: boolean;
  tags: string[];
  thumbnail: null;
  title: string;
  transcode_version: string;
  transcriptions: string[];
  type: string;
  updated_at: Date;
  url: string;
  user: string;
  waveform: Waveform;
}

export interface Advertising {
  enabled: boolean;
}

export interface AlternateSource {
  height: null;
  master: boolean;
  src: string;
  type: string;
  width: null;
}

export interface Amagi {
  airdate: null;
  episode_name: string;
  episode_number: null;
  program_description: string;
  published_date: null;
  season_number: null;
  status: string;
  thumbnail: null;
  vod: boolean;
}

export interface Copyrights {
  acr: ACR;
  status: string;
}

export interface ACR {
  matchCount: number;
  matches: string[];
  total: number;
}

export interface AudioMetadata {
  episode_id: string;
  s3_transcode: S3;
  s3: S3;
}

export interface S3 {
  AcceptRanges: string;
  Bucket: string;
  CacheControl?: string;
  ContentLength: number;
  ContentType: string;
  ETag: string;
  Key: string;
  LastModified: Date;
}

export interface PrimarySource {
  src: string;
  type: string;
}

export interface Waveform {
  status: string;
  url: string;
}

export interface Monetization {
  airchecks: Aircheck[];
  dai_enabled_count: number;
  fulfilled_aircheck_count: number;
  is_fully_airchecked: boolean;
  is_fully_monetized: boolean;
  planned_aircheck_count: number;
  planned_dai_count: number;
}

export interface Aircheck {
  advertiser_name: string;
  advertiser: string;
  is_fulfilled: boolean;
  is_planned: boolean;
}

export interface MontageFinal {
  ad_count: number;
  ad_slot_type: string;
  dai_enabled: boolean;
  end_time: number;
  start_time: number;
  type: string;
  virtual: boolean;
}

export interface PodcastPodcast {
  id: string;
  title: string;
}

export interface PodcastShow {
  brand: string;
  categories: ShowCategory[];
  created_at: Date;
  description: string;
  disable_ad_free_base_intro: boolean;
  disable_ad_free_partner_intro: boolean;
  download_volume: string;
  enable_ad_replacement: boolean;
  explicit: boolean;
  feed_version: null;
  id: string;
  image: string;
  images: ShowImages;
  label: string;
  language: string;
  pipestream_enabled: boolean;
  redirect: Redirect;
  sandbox: boolean;
  slug: string;
  ssai_enabled: boolean;
  status: string;
  subtitle: string;
  title: string;
  updated_at: Date;
  urls: ShowUrls;
}

export interface ShowCategory {
  category: string;
  subcategory: string;
}

export interface ShowImages {
  desktop: string;
  itunes: string;
  src: string;
}

export interface Redirect {
  enabled: boolean;
  url: string;
}

export interface ShowUrls {
  apple_podcast: string;
  feed: string;
  google_play: null;
  iheart: string;
  pandora: string;
  spotify: string;
  stitcher: null;
  tunein: string;
  website: string;
}

export interface StandardPost {}

export interface Product {
  id: null;
}

export interface Sharing {
  email: Email;
  facebook: Email;
  sms: Email;
  twitter: Email;
}

export interface Email {
  title: string;
  url: string;
}

export interface Sites {
  barstoolbets: boolean;
  barstoolsports: boolean;
  roughnrowdy: boolean;
}

export interface Thumbnail {
  desktop: string;
  featured: null;
  images: ThumbnailImages;
  location: string;
  raw_desktop: string;
  raw_featured: null;
  raw: string;
  type: ThumbnailType;
}

export interface ThumbnailImages {
  featured?: null;
  large: string;
  medium: string;
  small: string;
}

export enum ThumbnailType {
  Large = 'large',
  Small = 'small',
}

export enum StoryType {
  BarstoolOriginal = 'barstool_original',
  Fundraiser = 'fundraiser',
  Podcast = 'podcast',
  StandardPost = 'standard_post',
}

export interface StoryUrls {
  barstoolbets: string;
  barstoolsports: string;
  canonical: string;
  roughnrowdy: string;
}
