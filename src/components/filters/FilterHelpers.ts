import { Resource } from "@/types/resources";
import { Tag } from "@/types/filters";
import opening_hours from "opening_hours";

/**
 * Helper functions for resource filtering
 */

// Shared predicates
export const sharedPredicates = {
  // Always returns true - used for "no preference" options
  noPreference: (_: Resource) => true
};

// Feeling predicates based on tags
export const feelingPredicates = {
  noPreference: sharedPredicates.noPreference,
  anxious: (r: Resource) => r.tags.includes(Tag.Anxiety),
  burnedOut: (r: Resource) => r.tags.includes(Tag.Burnout),
  needCareerHelp: (r: Resource) => r.tags.includes(Tag.Career),
  needCommunity: (r: Resource) => r.tags.includes(Tag.Community),
  needHelp: (r: Resource) => r.tags.includes(Tag.Help),
  home: (r: Resource) => r.tags.includes(Tag.Home)
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
