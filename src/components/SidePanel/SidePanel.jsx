import React from "react";
import styled from "styled-components";
import { LANDMARK_SEQUENCE } from "../../constant";
import { PageContext } from "../PageProvider/PageProvider";

function SidePanel() {
  const { currentPageId } = React.useContext(PageContext);
  return (
    <SidePanelWrapper>
      <ol>
        {LANDMARK_SEQUENCE.map((option, index) => {
          const step = index + 1;
          return (
            <Step key={option.id}>
              <StepIndexIcon
                $id={option.id}
                $currentPageId={currentPageId}
              >
                {step}
              </StepIndexIcon>
              <div>
                <StepLabel>STEP {step}</StepLabel>
                <StepDescription>
                  {option.label.toUpperCase()}
                </StepDescription>
              </div>
            </Step>
          );
        })}
      </ol>
    </SidePanelWrapper>
  );
}

const SidePanelWrapper = styled.aside`
  background-color: var(--purplish-blue);
  border-radius: var(--radius);
  color: var(--white);
  padding-top: 30px;
  padding-left: 25px;

  flex-basis: 210px;
  flex-shrink: 0;
`;

const Step = styled.li`
  display: flex;
  gap: 12px;

  &:not(:last-of-type) {
    margin-bottom: 18px;
  }
`;

const StepIndexIcon = styled.div`
  --size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  border: 1px solid currentColor;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: var(--weight-bold);
  background-color: ${(props) =>
    props.$id === props.$currentPageId && "var(--light-blue)"};
  color: ${(props) =>
    props.$id === props.$currentPageId && "var(--marine-blue)"};
  border: ${(props) => props.$id === props.$currentPageId && "none"};
`;

const StepLabel = styled.p`
  font-size: 0.7rem;
  font-weight: var(--weight-regular);
  opacity: 0.5;
  margin-bottom: 4px;
`;

const StepDescription = styled.p`
  font-weight: var(--weight-bold);
  font-size: 0.75rem;
`;

export default SidePanel;
