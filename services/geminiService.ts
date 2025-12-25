
export class GeminiService {
  async sendMessage(message: string): Promise<string> {
    return Promise.resolve(
      `【Mock 回复】\n已收到你的问题：${message}\n\n系统运行正常，暂无异常告警。`
    );
  }

  async *sendMessageStream(message: string) {
    yield `【Mock Streaming】正在分析你的问题：${message}\n`;
    yield `系统各项指标正常，暂无需处理的告警。\n`;
    yield `分析完成。`;
  }
}

export const geminiService = new GeminiService();
