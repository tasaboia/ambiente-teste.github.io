import React from "react";
import { Spinner, HStack, Heading } from "native-base";

export const UILoading = () => {
  return <HStack padding={50} space={2} justifyContent="center" >
      <Spinner color="warning.500" accessibilityLabel="Loading posts" />
      <Heading color="warning.500" fontSize="md">
        Loading
      </Heading>
    </HStack>;
};