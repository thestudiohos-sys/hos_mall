'use server';
/**
 * @fileOverview A Genkit flow for generating AI-powered styling tips and evocative descriptions for clothing items.
 *
 * - aiGeneratedStylingTips - A function that generates styling tips and a description for a given clothing item.
 * - AIGeneratedStylingTipsInput - The input type for the aiGeneratedStylingTips function.
 * - AIGeneratedStylingTipsOutput - The return type for the aiGeneratedStylingTips function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIGeneratedStylingTipsInputSchema = z.object({
  clothingItemDescription: z.string().describe('A detailed description of the clothing item for which to generate styling tips and an evocative description.'),
});
export type AIGeneratedStylingTipsInput = z.infer<typeof AIGeneratedStylingTipsInputSchema>;

const AIGeneratedStylingTipsOutputSchema = z.object({
  stylingTips: z.array(z.string()).describe('A list of actionable styling tips for the clothing item.'),
  evocativeDescription: z.string().describe('An evocative and appealing short description of the clothing item, highlighting its unique charm and how it makes the wearer feel.'),
});
export type AIGeneratedStylingTipsOutput = z.infer<typeof AIGeneratedStylingTipsOutputSchema>;

export async function aiGeneratedStylingTips(input: AIGeneratedStylingTipsInput): Promise<AIGeneratedStylingTipsOutput> {
  return aiGeneratedStylingTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiGeneratedStylingTipsPrompt',
  input: { schema: AIGeneratedStylingTipsInputSchema },
  output: { schema: AIGeneratedStylingTipsOutputSchema },
  prompt: `You are a highly creative and sophisticated fashion stylist and copywriter for Antigravity, a luxury clothing brand known for its weightless elegance and futuristic minimalism.
Your task is to generate compelling styling tips and an evocative description for a given clothing item.
The styling tips should be practical and inspire potential customers on how to wear the item for various occasions, emphasizing a modern and effortless look.
The evocative description should highlight the light-as-air fabric, clean lines, and the sense of freedom it provides the wearer.

IMPORTANT: You MUST provide all your responses in Korean.

Clothing Item Description: {{{clothingItemDescription}}}`,
});

const aiGeneratedStylingTipsFlow = ai.defineFlow(
  {
    name: 'aiGeneratedStylingTipsFlow',
    inputSchema: AIGeneratedStylingTipsInputSchema,
    outputSchema: AIGeneratedStylingTipsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
