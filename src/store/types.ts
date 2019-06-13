export interface AuthState {
  token: string;
  status: string;
  hasLoadedOnce?: boolean;
}

export interface PlaylistState {
  playlist: {};
  status: string;
}

export interface RootState {
  version: string;
}
