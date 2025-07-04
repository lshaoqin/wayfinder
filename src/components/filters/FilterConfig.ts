import { FilterQuestionGroup } from "@/types/filters";
import { 
  costPredicates,
  timingPredicates,
  availabilityPredicates,
  anonymityPredicates,
  modalityPredicates 
} from "./FilterHelpers";

export const filterQuestions: FilterQuestionGroup[] = [
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
