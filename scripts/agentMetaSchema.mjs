import { z } from 'zod';

export const lLMRoleTypeSchema = z.union([
  z.literal('user'),
  z.literal('system'),
  z.literal('assistant'),
  z.literal('function'),
]);

export const lLMMessageSchema = z.object({
  content: z.string(),
  role: lLMRoleTypeSchema,
});

export const lLMExampleSchema = z.array(lLMMessageSchema);

export const lLMParamsSchema = z.object({
  frequency_penalty: z.number().optional().default(0),
  max_tokens: z.number().optional(),
  presence_penalty: z.number().optional().default(0),
  temperature: z.number().optional().default(0),
  top_p: z.number().optional().default(1),
});

export const metaDataSchema = z.object({
  avatar: z.string(),
  backgroundColor: z.string().optional(),
  description: z.string(),
  tags: z.array(z.string()),
  title: z.string(),
});

const lobeAgentConfigSchema = z.object({
  compressThreshold: z.number().optional(),
  displayMode: z.union([z.literal('chat'), z.literal('docs')]).optional(),
  enableCompressThreshold: z.boolean().optional(),
  enableHistoryCount: z.boolean().optional(),
  enableMaxTokens: z.boolean().optional(),
  example: lLMExampleSchema.optional(),
  historyCount: z.number().optional(),
  inputTemplate: z.string().optional(),
  model: z.string().default('gpt-3.5-turbo').optional(),
  params: lLMParamsSchema.optional(),
  plugins: z.array(z.string()).optional(),
  systemRole: z.string(),
});

export const agentMetaSchema = z.object({
  author: z.string(),
  config: lobeAgentConfigSchema,
  createAt: z.string(),
  homepage: z.string(),
  identifier: z.string(),
  meta: metaDataSchema,
  schemaVersion: z.number(),
});
