import { REGEX } from "../patterns";
import { TFunction } from "i18next";

export const emailValidator = (_: unknown, value: string, t: TFunction) => {
  if (value?.length > 0) {
    if (!value.match(REGEX.EMAIL)) {
      return Promise.reject(t("form.email"));
    }
  }
  return Promise.resolve();
};

export const phoneValidator = (_: unknown, value: string, t: TFunction) => {
  if (value?.length > 0) {
    if (!value.match(REGEX.PHONE)) {
      return Promise.reject(t("form.phone"));
    }
  }
  return Promise.resolve();
};

export const nameValidator = (_: unknown, value: string, t: TFunction) => {
  if (value?.length > 0) {
    if (value.trim() === "") {
      return Promise.reject(t("form.name"));
    }
  }
  return Promise.resolve();
};
