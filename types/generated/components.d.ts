import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomerCustomerBackend extends Schema.Component {
  collectionName: 'components_customer_customer_backends';
  info: {
    displayName: 'CustomerBackend';
    icon: 'dashboard';
  };
  attributes: {
    IsACustomer: Attribute.Boolean;
    HubspotURL: Attribute.String;
    LagoURL: Attribute.String;
    LicenseURL: Attribute.String;
  };
}

export interface CustomerUser extends Schema.Component {
  collectionName: 'components_customer_users';
  info: {
    displayName: 'User';
    icon: 'alien';
  };
  attributes: {
    FirstName: Attribute.String;
    LastName: Attribute.String;
    UserEmail: Attribute.Email;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'customer.customer-backend': CustomerCustomerBackend;
      'customer.user': CustomerUser;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
