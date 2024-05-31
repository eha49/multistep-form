import styled from "styled-components";

function PlanCard() {
  return (
    <PlanWrapper>
      <Icon
        src="../../../src/assets/images/icon-arcade.svg"
        alt="a plan icon"
      />
      <PlanTitle>Arcade</PlanTitle>
      <PlanPrice>$90/yr</PlanPrice>
      <PlanBonus>2 months free</PlanBonus>
    </PlanWrapper>
  );
}

const PlanWrapper = styled.div`
  border: 1px solid var(--cool-gray);
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Icon = styled.img`
  width: 30px;
  display: block;
  margin-bottom: 16px;
`;

const PlanTitle = styled.h2`
  font-size: 0.9rem;
`;

const PlanPrice = styled.p`
  font-size: 0.8rem;
  color: var(--cool-gray);
`;

const PlanBonus = styled.p`
  font-size: 0.75rem;
`;

export default PlanCard;
