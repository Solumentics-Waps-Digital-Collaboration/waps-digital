import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'date', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'URL unique ID (ex: amasia, ramana)',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Nom du Projet',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Education / École', value: 'Education / École' },
        { label: 'Distribution / Commerce', value: 'Distribution / Canal+' },
        { label: 'Corporate / Service', value: 'Corporate' },
        { label: 'E-commerce', value: 'E-commerce' },
      ],
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMMM yyyy',
        },
      },
    },
    {
      name: 'stack',
      type: 'text',
      label: 'Tech Stack',
      defaultValue: 'Next.js, Tailwind, Payload CMS',
    },
    {
      name: 'url',
      type: 'text',
      label: 'Lien du site (Live)',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contenu & Story',
          fields: [
            {
              name: 'description',
              type: 'textarea',
              label: 'Description Courte (Intro)',
              required: true,
            },
            {
              name: 'challenge',
              type: 'textarea',
              label: 'Le Challenge',
              required: true,
            },
            {
              name: 'solution',
              type: 'textarea',
              label: 'La Solution Waps',
              required: true,
            },
          ],
        },
        {
          label: 'Chiffres Clés (Stats)',
          fields: [
            {
              name: 'stats',
              type: 'array',
              label: 'Statistiques',
              minRows: 1,
              maxRows: 4,
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Intitulé (ex: Vitesse)',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  label: 'Valeur (ex: 0.8s)',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Galerie Images',
          fields: [
            {
              name: 'projectImages',
              type: 'array',
              label: 'Screenshots du projet',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}