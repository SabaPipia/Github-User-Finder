export interface User {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
}

export interface Theme {
  changeTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
}

export interface Overview {
  publicRepos?: number;
  followingCount?: number;
  followersCount?: number;
  theme: string;
}

export interface CardO {
  title?: string;
  count?: number | null;
  theme: string;
}

export interface ProfileN {
  name?: string;
  userName?: string;
  bio?: string;
  date?: any;
  theme: string;
}

export interface ProfileL {
  location?: string;
  url?: string;
  twitterUsername?: string;
  company?: string;
  theme: string;
}

export interface Avatar {
  avatarUrl?: string;
}

export interface Input {
  setuser: React.Dispatch<React.SetStateAction<string>>;
  fetch: () => void;
  user: string;
  searchResult: string;
  theme: string;
}
