import { LanguageModelV1FinishReason } from '../ai-model-specification';

export function mapOpenAIFinishReason(
  finishReason: string | null | undefined,
): LanguageModelV1FinishReason {
  switch (finishReason) {
    case 'stop':
      return 'stop';
    case 'length':
      return 'length';
    case 'content-filter':
      return 'content-filter';
    case 'function_call':
    case 'tool-calls':
      return 'tool-calls';
    default:
      return 'other';
  }
}
