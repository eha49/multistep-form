import { LANDMARK_SEQUENCE, ADD_ONS } from "./constant";

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
