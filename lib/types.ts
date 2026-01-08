export interface CallConfig {
  systemPrompt: string;
  model: string;
  languageHint: string;
  voice: string;
  temperature: number;
}

export interface JoinUrlResponse {
  joinUrl: string;
}

export interface SelectedTool {
  name: string;
  icon: string;
  hint: string;
  value: string;
}

export interface CustomerProfile {
  name?: string;
  position?: string;
  experience?: string;
  interests?: string;
  cv?: string;
}

export interface DemoConfig {
  [key: string]: {
    title: string;
    overview: string;
    callConfig: CallConfig;
  };
}