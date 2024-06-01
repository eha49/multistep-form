import { LANDMARK_SEQUENCE, ADD_ONS, PLANS } from "./constant";

export function goToPage(event, item) {
  const index = LANDMARK_SEQUENCE.indexOf(item);
  const nextElement = LANDMARK_SEQUENCE[index + 1];
  const previousElement = LANDMARK_SEQUENCE[index - 1];

  if (nextElement && event.nativeEvent.submitter.dataset.next) {
    return nextElement.id;
  } else if (
    previousElement &&
    event.nativeEvent.submitter.dataset.back
  ) {
    return previousElement.id;
  }
}

export function createAddOnsState() {
  const addOnsState = {};
  ADD_ONS.forEach((option) => {
    addOnsState[option.id] = false;
  });

  return addOnsState;
}

export function getPlanPageId() {
  const requiredLandmark = LANDMARK_SEQUENCE.filter((plan) => {
    return plan.label === "select plan";
  })[0];
  const planPageId = requiredLandmark.id;
  return planPageId;
}

export function getPlan(key) {
  const requiredPlan = PLANS.filter((plan) => {
    return plan.name === key;
  })[0];

  return requiredPlan;
}

export function calculateTotalPrice(
  selectedPlan,
  addOns,
  currentPeriodicity
) {
  let sum = getPlan(selectedPlan)[currentPeriodicity];

  const addOnsApplied = ADD_ONS.filter((item) => {
    return addOns[item.id];
  });

  addOnsApplied.forEach((item) => {
    sum += item[currentPeriodicity];
  });

  return sum;
}
