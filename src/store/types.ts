export interface AuthState {
  token: string;
  status: string;
  hasLoadedOnce?: boolean;
}

export interface PlaylistState {
  list: any[];
  status: string;
  id: number|null;
}

export interface RootState {
  version: string;
}
