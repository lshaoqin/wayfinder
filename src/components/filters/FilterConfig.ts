import { FilterQuestionGroup, FeelingFilterKey } from "@/types/filters";
import { 
  costPredicates,
  timingPredicates,
  availabilityPredicates,
  anonymityPredicates,
  modalityPredicates,
  feelingPredicates
} from "./FilterHelpers";

// Export feeling filters for use in SupportOptionButton
export const feelingFilters = {
  [FeelingFilterKey.Anxious]: {
    key: "feeling-anxious",
    name: "Anxious",
    predicate: feelingPredicates.anxious,
    isDefault: false
  },
  [FeelingFilterKey.BurnedOut]: {
    key: "feeling-burned-out",
    name: "Burned out",
    predicate: feelingPredicates.burnedOut,
    isDefault: false
  },
  [FeelingFilterKey.NeedHelp]: {
    key: "feeling-need-help",
    name: "Down",
    predicate: feelingPredicates.needHelp,
    isDefault: false
  },
  [FeelingFilterKey.NeedCareerHelp]: {
    key: "feeling-need-career-help",
    name: "Directionless",
    predicate: feelingPredicates.needCareerHelp,
    isDefault: false
  },
  [FeelingFilterKey.NeedCommunity]: {
    key: "feeling-need-community",
    name: "Lonely",
    predicate: feelingPredicates.needCommunity,
    isDefault: false
  },
  [FeelingFilterKey.Home]: {
    key: "feeling-home",
    name: "Family issues",
    predicate: feelingPredicates.home,
    isDefault: false
  }
};

export const filterQuestions: FilterQuestionGroup[] = [
  {
    question: "I'm feeling...",
    filters: [
      {
        key: "feeling-not-sure",
        name: "Not sure",
        predicate: feelingPredicates.noPreference,
        isDefault: true
      },
      {
        key: "feeling-anxious",
        name: "Anxious",
        predicate: feelingPredicates.anxious,
        isDefault: false
      },
      {
        key: "feeling-burned-out",
        name: "Burned out",
        predicate: feelingPredicates.burnedOut,
        isDefault: false
      },
      {
        key: "feeling-need-help",
        name: "Down",
        predicate: feelingPredicates.needHelp,
        isDefault: false
      },
      {
        key: "feeling-need-career-help",
        name: "Directionless",
        predicate: feelingPredicates.needCareerHelp,
        isDefault: false
      },
      {
        key: "feeling-need-community",
        name: "Lonely",
        predicate: feelingPredicates.needCommunity,
        isDefault: false
      },
      {
        key: "feeling-home",
        name: "Family issues",
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
