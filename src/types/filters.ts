import { Resource } from "./resources";

export enum Tag {
    Anxiety = 'anxiety',
    Burnout = 'burnout',
    Career = 'career',
    Community = 'community',
    Help = 'help',
    Home = 'home'
}

export enum FeelingFilterKey {
    Anxious = 'anxious',
    BurnedOut = 'burnedOut',
    NeedHelp = 'needHelp',
    NeedCareerHelp = 'needCareerHelp',
    NeedCommunity = 'needCommunity',
    Home = 'home'
}

export type Filter = {
    key: string;
    name: string;
    predicate: (r: Resource) => boolean;
    isDefault: boolean;
}

export type FilterQuestionGroup = {
    question: string;
    filters: Filter[];
}