import { FilterQuestionGroup, IssueFilterKey } from "@/types/filters";
import { 
  costPredicates,
  timingPredicates,
  availabilityPredicates,
  anonymityPredicates,
  modalityPredicates,
  feelingPredicates
} from "./FilterHelpers";

// Export issue filters for use in SupportOptionButton
export const issueFilters = {
  [IssueFilterKey.Anxious]: {
    key: "issue-anxiety",
    name: "Anxiety & Worry",
    predicate: feelingPredicates.anxious,
    isDefault: false
  },
  [IssueFilterKey.BurnedOut]: {
    key: "issue-burnout",
    name: "Burnout & Stress",
    predicate: feelingPredicates.burnedOut,
    isDefault: false
  },
  [IssueFilterKey.NeedHelp]: {
    key: "issue-down",
    name: "Sadness and self-doubt",
    predicate: feelingPredicates.needHelp,
    isDefault: false
  },
  [IssueFilterKey.NeedCareerHelp]: {
    key: "issue-directionless",
    name: "Feelings of directionlessness",
    predicate: feelingPredicates.needCareerHelp,
    isDefault: false
  },
  [IssueFilterKey.NeedCommunity]: {
    key: "issue-alone",
    name: "Feelings of loneliness",
    predicate: feelingPredicates.needCommunity,
    isDefault: false
  },
  [IssueFilterKey.Home]: {
    key: "issue-family",
    name: "Family Issues",
    predicate: feelingPredicates.home,
    isDefault: false
  }
};

export const filterQuestions: FilterQuestionGroup[] = [
  {
    question: "I'm facing...",
    filters: [
      {
        key: "issue-not-sure",
        name: "Not sure",
        predicate: feelingPredicates.noPreference,
        isDefault: true
      },
      {
        key: "issue-anxiety",
        name: "Anxiety & Worry",
        predicate: feelingPredicates.anxious,
        isDefault: false
      },
      {
        key: "issue-burnout",
        name: "Burnout & Stress",
        predicate: feelingPredicates.burnedOut,
        isDefault: false
      },
      {
        key: "issue-down",
        name: "Sadness and self-doubt",
        predicate: feelingPredicates.needHelp,
        isDefault: false
      },
      {
        key: "issue-directionless",
        name: "Feelings of directionlessness",
        predicate: feelingPredicates.needCareerHelp,
        isDefault: false
      },
      {
        key: "issue-alone",
        name: "Feelings of loneliness",
        predicate: feelingPredicates.needCommunity,
        isDefault: false
      },
      {
        key: "issue-family",
        name: "Family Issues",
        predicate: feelingPredicates.home,
        isDefault: false
      }
    ]
  },
  {
    question: "Cost",
    filters: [
      {
        key: "cost-no-preference",
        name: "No preference",
        predicate: costPredicates.noPreference,
        isDefault: true
      },
      {
        key: "cost-free",
        name: "Free only",
        predicate: costPredicates.freeOnly,
        isDefault: false
      }
    ]
  },
  {
    question: "Timing",
    filters: [
      {
        key: "timing-no-preference",
        name: "No preference",
        predicate: timingPredicates.noPreference,
        isDefault: true
      },
      {
        key: "timing-open-now",
        name: "Open now",
        predicate: timingPredicates.openNow,
        isDefault: false
      }
    ]
  },
  {
    question: "Availability",
    filters: [
      {
        key: "availability-no-preference",
        name: "No preference",
        predicate: availabilityPredicates.noPreference,
        isDefault: true
      },
      {
        key: "availability-no-appointment",
        name: "No appointment needed",
        predicate: availabilityPredicates.noAppointment,
        isDefault: false
      }
    ]
  },
  {
    question: "Anonymity",
    filters: [
      {
        key: "anonymity-no-preference",
        name: "No preference",
        predicate: anonymityPredicates.noPreference,
        isDefault: true
      },
      {
        key: "anonymity-anonymous-only",
        name: "Anonymous only",
        predicate: anonymityPredicates.anonymousOnly,
        isDefault: false
      }
    ]
  },
  {
    question: "Modality",
    filters: [
      {
        key: "modality-no-preference",
        name: "No preference",
        predicate: modalityPredicates.noPreference,
        isDefault: true
      },
      {
        key: "modality-online-phone",
        name: "Online/phone only",
        predicate: modalityPredicates.onlinePhoneOnly,
        isDefault: false
      },
      {
        key: "modality-walk-in",
        name: "Walk-in only",
        predicate: modalityPredicates.walkInOnly,
        isDefault: false
      }
    ]
  }
];
