/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Country = {
  __typename?: 'Country';
  code?: Maybe<Scalars['String']>;
  defaultTimezone?: Maybe<Scalars['String']>;
  dialCode?: Maybe<Scalars['String']>;
  iso3?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  otpInAppEnabled?: Maybe<Scalars['Boolean']>;
};

export type Language = {
  __typename?: 'Language';
  ISO_639_1?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uiLanguage?: Maybe<Scalars['Boolean']>;
};

export type LoginInfo = {
  __typename?: 'LoginInfo';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  forgotPasswordEmail?: Maybe<Scalars['Boolean']>;
  login?: Maybe<LoginInfo>;
  onboardingComplete?: Maybe<Response>;
  onboardingConfirmation?: Maybe<Response>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
};

export type MutationForgotPasswordEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
  recaptcha?: InputMaybe<Scalars['String']>;
};

export type MutationLoginArgs = {
  mfa_code?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type MutationOnboardingCompleteArgs = {
  guid?: InputMaybe<Scalars['String']>;
  organisation?: InputMaybe<OnboardingOrganisation>;
  user?: InputMaybe<OnboardingUser>;
};

export type MutationOnboardingConfirmationArgs = {
  email?: InputMaybe<Scalars['String']>;
  guid?: InputMaybe<Scalars['String']>;
  recaptcha?: InputMaybe<Scalars['String']>;
};

export type MutationResetPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type MutationVerifyEmailArgs = {
  expires?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['String']>;
};

export type Onboarding = {
  __typename?: 'Onboarding';
  email?: Maybe<Scalars['String']>;
  guid?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  seller_ID?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  user_ID?: Maybe<Scalars['Int']>;
};

export type OnboardingOrganisation = {
  country?: InputMaybe<Scalars['String']>;
  default_timezone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<OrganisationType>;
};

export type OnboardingUser = {
  email?: InputMaybe<Scalars['String']>;
  marketingAllowed?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
};

export enum OrganisationType {
  Business = 'business',
  Individual = 'individual',
}

export type PrimarySeller = {
  __typename?: 'PrimarySeller';
  id?: Maybe<Scalars['Int']>;
  logo_link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  countryResolver?: Maybe<Array<Maybe<Country>>>;
  languageList?: Maybe<Array<Maybe<Language>>>;
  onboarding?: Maybe<Onboarding>;
  timezone?: Maybe<TimezoneResult>;
};

export type QueryOnboardingArgs = {
  guid?: InputMaybe<Scalars['String']>;
};

export type QueryTimezoneArgs = {
  country?: InputMaybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  message?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
  primarySeller?: Maybe<PrimarySeller>;
  role?: Maybe<Scalars['String']>;
  sellers?: Maybe<Array<Maybe<Seller>>>;
};

export type Seller = {
  __typename?: 'Seller';
  id?: Maybe<Scalars['Int']>;
  logo_link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type?: Maybe<Scalars['String']>;
};

export type TimezoneResult = {
  __typename?: 'TimezoneResult';
  timezones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  countryCode?: Maybe<Scalars['String']>;
  defaultSellerId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isMarketingAllowed?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  settings?: Maybe<Array<UserSettings>>;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AllCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type AllCountriesQuery = {
  __typename?: 'Query';
  countryResolver?: Array<{
    __typename?: 'Country';
    code?: string | null;
    name?: string | null;
    iso3?: string | null;
    dialCode?: string | null;
    defaultTimezone?: string | null;
    otpInAppEnabled?: boolean | null;
  } | null> | null;
};

export const AllCountriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'allCountries' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countryResolver' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'iso3' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dialCode' } },
                { kind: 'Field', name: { kind: 'Name', value: 'defaultTimezone' } },
                { kind: 'Field', name: { kind: 'Name', value: 'otpInAppEnabled' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllCountriesQuery, AllCountriesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Country = {
  __typename?: 'Country';
  code?: Maybe<Scalars['String']>;
  defaultTimezone?: Maybe<Scalars['String']>;
  dialCode?: Maybe<Scalars['String']>;
  iso3?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  otpInAppEnabled?: Maybe<Scalars['Boolean']>;
};

export type Language = {
  __typename?: 'Language';
  ISO_639_1?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uiLanguage?: Maybe<Scalars['Boolean']>;
};

export type LoginInfo = {
  __typename?: 'LoginInfo';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  forgotPasswordEmail?: Maybe<Scalars['Boolean']>;
  login?: Maybe<LoginInfo>;
  onboardingComplete?: Maybe<Response>;
  onboardingConfirmation?: Maybe<Response>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
};

export type MutationForgotPasswordEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
  recaptcha?: InputMaybe<Scalars['String']>;
};

export type MutationLoginArgs = {
  mfa_code?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type MutationOnboardingCompleteArgs = {
  guid?: InputMaybe<Scalars['String']>;
  organisation?: InputMaybe<OnboardingOrganisation>;
  user?: InputMaybe<OnboardingUser>;
};

export type MutationOnboardingConfirmationArgs = {
  email?: InputMaybe<Scalars['String']>;
  guid?: InputMaybe<Scalars['String']>;
  recaptcha?: InputMaybe<Scalars['String']>;
};

export type MutationResetPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type MutationVerifyEmailArgs = {
  expires?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['String']>;
};

export type Onboarding = {
  __typename?: 'Onboarding';
  email?: Maybe<Scalars['String']>;
  guid?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  seller_ID?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  user_ID?: Maybe<Scalars['Int']>;
};

export type OnboardingOrganisation = {
  country?: InputMaybe<Scalars['String']>;
  default_timezone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<OrganisationType>;
};

export type OnboardingUser = {
  email?: InputMaybe<Scalars['String']>;
  marketingAllowed?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
};

export enum OrganisationType {
  Business = 'business',
  Individual = 'individual',
}

export type PrimarySeller = {
  __typename?: 'PrimarySeller';
  id?: Maybe<Scalars['Int']>;
  logo_link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  countryResolver?: Maybe<Array<Maybe<Country>>>;
  languageList?: Maybe<Array<Maybe<Language>>>;
  onboarding?: Maybe<Onboarding>;
  timezone?: Maybe<TimezoneResult>;
};

export type QueryOnboardingArgs = {
  guid?: InputMaybe<Scalars['String']>;
};

export type QueryTimezoneArgs = {
  country?: InputMaybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  message?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
  primarySeller?: Maybe<PrimarySeller>;
  role?: Maybe<Scalars['String']>;
  sellers?: Maybe<Array<Maybe<Seller>>>;
};

export type Seller = {
  __typename?: 'Seller';
  id?: Maybe<Scalars['Int']>;
  logo_link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Array<Maybe<Scalars['Int']>>>;
  type?: Maybe<Scalars['String']>;
};

export type TimezoneResult = {
  __typename?: 'TimezoneResult';
  timezones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  countryCode?: Maybe<Scalars['String']>;
  defaultSellerId?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstLogin?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isMarketingAllowed?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  settings?: Maybe<Array<UserSettings>>;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AllCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type AllCountriesQuery = {
  __typename?: 'Query';
  countryResolver?: Array<{
    __typename?: 'Country';
    code?: string | null;
    name?: string | null;
    iso3?: string | null;
    dialCode?: string | null;
    defaultTimezone?: string | null;
    otpInAppEnabled?: boolean | null;
  } | null> | null;
};
