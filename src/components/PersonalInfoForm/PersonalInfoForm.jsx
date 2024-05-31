import React from "react";
import styled from "styled-components";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import TextInput from "../TextInput/TextInput";
import { Button, LinkButton } from "../Button/Button";
import { UserInfoContext } from "../UserInfoProvider/UserInfoProvider";
import { PageContext } from "../PageProvider/PageProvider";
import { goToPage } from "../../helpers";

function PersonalInfoForm({ item }) {
  const { user, handleChange } = React.useContext(UserInfoContext);
  const { changePageId } = React.useContext(PageContext);

  return (
    <Form
      action="#"
      onSubmit={(event) => {
        event.preventDefault();
        const newPageId = goToPage(event, item);
        changePageId(newPageId);
      }}
    >
      <FormTitle>Personal Info</FormTitle>
      <FormDescription>
        Please provide your name, email address and phone number.
      </FormDescription>
      <InputWrapper>
        <TextInput
          type="text"
          label="name"
          name="name"
          placeholder="e.g. Stephen King"
          required={true}
          value={user.name}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <TextInput
          type="email"
          label="email address"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          required={true}
          value={user.email}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <TextInput
          type="tel"
          label="phone number"
          name="number"
          placeholder="e.g. 9419025412"
          required={true}
          pattern="[0-9]{10}"
          value={user.number}
          onChange={handleChange}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button data-next={item.id}>Next Step</Button>
      </ButtonWrapper>
    </Form>
  );
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;

  &:first-of-type {
    margin-top: 32px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 16px;
  display: grid;
  grid-auto-flow: column;
`;

export default PersonalInfoForm;
