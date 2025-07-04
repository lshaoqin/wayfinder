import { Resource } from "@/types/resources";
import opening_hours from "opening_hours";

/**
 * Helper functions for resource filtering
 */

// Shared predicates
export const sharedPredicates = {
  // Always returns true - used for "no preference" options
  noPreference: (_r: Resource) => true
};

// Cost predicates
export const costPredicates = {
  noPreference: sharedPredicates.noPreference,
  freeOnly: (r: Resource) => r.cost.toLowerCase().includes("free")
};

// Timing predicates
export const timingPredicates = {
  noPreference: sharedPredicates.noPreference,
  openNow: (r: Resource) => {
    const hours = new opening_hours(r.opening_hours);
    return hours.getState();
  }
};

// Availability predicates
export const availabilityPredicates = {
  noPreference: sharedPredicates.noPreference,
  noAppointment: (r: Resource) => r.availability !== "Sign-up needed" && r.availability !== "Referral or appointment needed"
};

// Anonymity predicates
export const anonymityPredicates = {
  noPreference: sharedPredicates.noPreference,
  anonymousOnly: (r: Resource) => r.anonymous === true
};

// Modality predicates
export const modalityPredicates = {
  noPreference: sharedPredicates.noPreference,
  onlinePhoneOnly: (r: Resource) => {
    const modalityLower = r.modality.toLowerCase();
    return modalityLower.includes("online") || 
           modalityLower.includes("phone") || 
           modalityLower.includes("virtual") || 
           modalityLower.includes("remote");
  },
  walkInOnly: (r: Resource) => {
    const modalityLower = r.modality.toLowerCase();
    return modalityLower.includes("walk-in") || 
           modalityLower.includes("walk in") || 
           modalityLower.includes("in person") || 
           modalityLower.includes("in-person");
  }
};
