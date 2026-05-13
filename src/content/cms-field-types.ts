/**
 * Typy pro popis polí CMS (administrace generuje formulář z ContentConfig).
 * @see tmp/index.ts — referenční projekt
 */

export type ContentFieldChoice = { value: string; label: string };

export type ContentField = {
  label: string;
  type?: 'text' | 'textarea' | 'image' | 'choice';
  required?: boolean;
  helpText?: string;
  section?: string;
  placeholder?: string;
  recommendedMaxLength?: number;
  maxLength?: number;
  advanced?: boolean;
  choices?: ContentFieldChoice[];
};

/** Klíč v JSON (např. arch-cs.json) → metadata pole pro editor. */
export type ContentConfig = Record<string, ContentField>;
