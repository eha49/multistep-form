import styled from "styled-components";

function Success() {
  return (
    <Wrapper>
      <Icon
        src="../../../src/assets/images/icon-thank-you.svg"
        alt="thankyou icon"
      />
      <Heading>Thank you!</Heading>
      <Message>
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com
      </Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const Icon = styled.img`
  display: block;
  width: 60px;
  align-self: center;
`;

const Heading = styled.h2`
  text-align: center;
`;

const Message = styled.p`
  font-size: 0.85rem;
  color: var(--cool-gray);
  text-align: center;
`;

export default Success;
