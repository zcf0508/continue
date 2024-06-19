import { ModelName } from "core";
import { ModelProviderTag } from "./modelProviders";
import { HTMLInputTypeAttribute } from "react";

export interface InputDescriptor {
  inputType: HTMLInputTypeAttribute;
  key: string;
  label: string;
  placeholder?: string;
  defaultValue?: string | number;
  min?: number;
  max?: number;
  step?: number;
  options?: string[];
  required?: boolean;
  description?: string;
  [key: string]: any;
}

// A dimension is like parameter count - 7b, 13b, 34b, etc.
// You would set options to the field that should be changed for that option in the params field of ModelPackage
export interface PackageDimension {
  name: string;
  description: string;
  options: { [key: string]: { [key: string]: any } };
}

export interface ModelPackage {
  title: string;
  icon?: string;
  collectInputFor?: InputDescriptor[];
  description: string;
  refUrl?: string;
  tags?: ModelProviderTag[];
  params: {
    model: ModelName;
    templateMessages?: string;
    contextLength: number;
    stopTokens?: string[];
    promptTemplates?: any;
    replace?: [string, string][];
    [key: string]: any;
  };
  dimensions?: PackageDimension[];
  providerOptions?: string[];
  isOpenSource: boolean;
}

export const codeLlamaInstruct: ModelPackage = {
  title: "CodeLlama Instruct",
  description:
    "A model from Meta, fine-tuned for code generation and conversation",
  refUrl: "",
  params: {
    title: "CodeLlama-7b",
    model: "codellama-7b",
    contextLength: 4096,
  },
  icon: "meta.png",
  dimensions: [
    {
      name: "Parameter Count",
      description: "The number of parameters in the model",
      options: {
        "7b": {
          model: "codellama-7b",
          title: "CodeLlama-7b",
        },
        "13b": {
          model: "codellama-13b",
          title: "CodeLlama-13b",
        },
        "34b": {
          model: "codellama-34b",
          title: "CodeLlama-34b",
        },
        "70b": {
          model: "codellama-70b",
          title: "Codellama-70b",
        },
      },
    },
  ],
  providerOptions: ["ollama", "lmstudio", "together", "llamacpp", "replicate"],
  isOpenSource: true,
};

export const codellama70bTrial: ModelPackage = {
  title: "Codellama 70b (Free Trial)",
  description:
    "The best code model from Meta, fine-tuned for code generation and conversation",
  refUrl: "",
  params: {
    title: "CodeLlama-70b",
    model: "codellama-70b",
    contextLength: 4096,
  },
  icon: "meta.png",
  providerOptions: ["freetrial"],
  isOpenSource: false,
};

export const mixtralTrial: ModelPackage = {
  title: "Mixtral (Free Trial)",
  description:
    "Mixtral 8x7b is a mixture of experts model created by Mistral AI",
  refUrl: "",
  params: {
    title: "Mixtral",
    model: "mistral-8x7b",
    contextLength: 4096,
  },
  icon: "mistral.png",
  providerOptions: ["freetrial", "groq"],
  isOpenSource: false,
};

export const llama38bChat: ModelPackage = {
  title: "Llama3 8b",
  description: "The latest Llama model from Meta, fine-tuned for chat",
  refUrl: "",
  params: {
    title: "Llama3-8b",
    model: "llama3-8b",
    contextLength: 8192,
  },
  icon: "meta.png",
  providerOptions: ["groq"],
  isOpenSource: false,
};

export const llama370bChat: ModelPackage = {
  title: "Llama3 70b Chat",
  description: "The latest Llama model from Meta, fine-tuned for chat",
  refUrl: "",
  params: {
    title: "Llama3-70b",
    model: "llama3-70b",
    contextLength: 8192,
  },
  icon: "meta.png",
  providerOptions: ["groq"],
  isOpenSource: false,
};

export const llama270bChat: ModelPackage = {
  title: "Llama2 70b Chat",
  description: "The latest Llama model from Meta, fine-tuned for chat",
  refUrl: "",
  params: {
    title: "Llama2-70b",
    model: "llama2-70b",
    contextLength: 4096,
  },
  icon: "meta.png",
  providerOptions: ["groq"],
  isOpenSource: false,
};

export const llama3Chat: ModelPackage = {
  title: "Llama3 Chat",
  description: "The latest model from Meta, fine-tuned for chat",
  refUrl: "",
  params: {
    title: "Llama3-8b",
    model: "llama3-8b",
    contextLength: 8192,
  },
  icon: "meta.png",
  dimensions: [
    {
      name: "Parameter Count",
      description: "The number of parameters in the model",
      options: {
        "8b": {
          model: "llama3-8b",
          title: "Llama3-8b",
        },
        "70b": {
          model: "llama3-70b",
          title: "Llama3-70b",
        },
      },
    },
  ],
  providerOptions: ["ollama", "lmstudio", "together", "llamacpp", "replicate"],
  isOpenSource: true,
};

export const wizardCoder: ModelPackage = {
  title: "WizardCoder",
  description:
    "A CodeLlama-based code generation model from WizardLM, focused on Python",
  refUrl: "",
  params: {
    title: "WizardCoder-7b",
    model: "wizardcoder-7b",
    contextLength: 4096,
  },
  icon: "wizardlm.png",
  dimensions: [
    {
      name: "Parameter Count",
      description: "The number of parameters in the model",
      options: {
        "7b": {
          model: "wizardcoder-7b",
          title: "WizardCoder-7b",
        },
        "13b": {
          model: "wizardcoder-13b",
          title: "WizardCoder-13b",
        },
        "34b": {
          model: "wizardcoder-34b",
          title: "WizardCoder-34b",
        },
      },
    },
  ],
  providerOptions: ["ollama", "lmstudio", "llamacpp", "replicate"],
  isOpenSource: true,
};

export const phindCodeLlama: ModelPackage = {
  title: "Phind CodeLlama (34b)",
  description: "A finetune of CodeLlama by Phind",
  icon: "meta.png",
  params: {
    title: "Phind CodeLlama",
    model: "phind-codellama-34b",
    contextLength: 4096,
  },
  providerOptions: ["ollama", "lmstudio", "llamacpp", "replicate", "freetrial"],
  isOpenSource: true,
};

export const mistralOs: ModelPackage = {
  title: "Mistral",
  description:
    "A series of open-weight models created by Mistral AI, highly competent for code generation and other tasks",
  params: {
    title: "Mistral",
    model: "mistral-7b",
    contextLength: 4096,
  },
  dimensions: [
    {
      name: "Parameter Count",
      description: "The number of parameters in the model",
      options: {
        "7b": {
          model: "mistral-7b",
          title: "Mistral-7b",
        },
        "8x7b (MoE)": {
          model: "mistral-8x7b",
          title: "Mixtral",
        },
      },
    },
  ],
  icon: "mistral.png",
  providerOptions: ["ollama", "lmstudio", "together", "llamacpp", "replicate"],
  isOpenSource: true,
};

export const codestral: ModelPackage = {
  title: "Codestral",
  description:
    "Codestral is an advanced generative model created by Mistral AI, tailored for coding tasks like fill-in-the-middle and code completion. Trained on more than 80 programming languages, Codestral demonstrates proficiency in both widely-used and less-common languages.",
  params: {
    title: "Codestral",
    model: "codestral-latest",
    contextLength: 32000,
  },
  icon: "mistral.png",
  providerOptions: ["mistral"],
  isOpenSource: false,
};

export const mistral7b: ModelPackage = {
  title: "Mistral 7B",
  description:
    "The first dense model released by Mistral AI, perfect for experimentation, customization, and quick iteration. At the time of the release, it matched the capabilities of models up to 30B parameters.",
  params: {
    title: "Mistral 7B",
    model: "open-mistral-7b",
    contextLength: 32000,
  },
  icon: "mistral.png",
  providerOptions: ["mistral"],
  isOpenSource: false,
};

export const mistral8x7b: ModelPackage = {
  title: "Mixtral 8x7B",
  description:
    "A sparse mixture of experts model. As such, it leverages up to 45B parameters but only uses about 12B during inference, leading to better inference throughput at the cost of more vRAM.",
  params: {
    title: "Mixtral 8x7B",
    model: "open-mixtral-8x7b",
    contextLength: 32000,
  },
  icon: "mistral.png",
  providerOptions: ["mistral"],
  isOpenSource: false,
};

export const mistral8x22b: ModelPackage = {
  title: "Mistral 8x22B",
  description:
    "A bigger sparse mixture of experts model. As such, it leverages up to 141B parameters but only uses about 39B during inference, leading to better inference throughput at the cost of more vRAM.",
  params: {
    title: "Mistral 8x22B",
    model: "open-mixtral-8x22b",
    contextLength: 64000,
  },
  icon: "mistral.png",
  providerOptions: ["mistral"],
  isOpenSource: false,
};

export const mistralSmall: ModelPackage = {
  title: "Mistral Small",
  description:
    "Suitable for simple tasks that one can do in bulk (Classification, Customer Support, or Text Generation)",
  params: {
    title: "Mistral Small",
    model: "mistral-small-latest",
    contextLength: 32000,
  },
  icon: "mistral.png",
  providerOptions: ["mistral"],
  isOpenSource: false,
};

export const mistralLarge: ModelPackage = {
  title: "Mistral Large",
  description:
    "Mistral's flagship model that's ideal for complex tasks that require large reasoning capabilities or are highly specialized (Synthetic Text Generation, Code Generation, RAG, or Agents).",
  params: {
    title: "Mistral Large",
    model: "mistral-large-latest",
    contextLength: 32000,
  },
  icon: "mistral.png",
  providerOptions: ["mistral"],
  isOpenSource: false,
};

export const geminiPro: ModelPackage = {
  title: "Gemini Pro",
  description: "A highly capable model created by Google DeepMind",
  params: {
    title: "Gemini Pro",
    model: "gemini-pro",
    contextLength: 32_000,
    apiKey: "<API_KEY>",
  },
  icon: "gemini.png",
  providerOptions: ["gemini"],
  isOpenSource: false,
};

export const gemini15Pro: ModelPackage = {
  title: "Gemini 1.5 Pro",
  description: "A newer Gemini model with 1M token context length",
  params: {
    title: "Gemini 1.5 Pro",
    model: "gemini-1.5-pro-latest",
    contextLength: 1_000_000,
    apiKey: "<API_KEY>",
  },
  icon: "gemini.png",
  providerOptions: ["gemini", "freetrial"],
  isOpenSource: false,
};

export const gemini15Flash: ModelPackage = {
  title: "Gemini 1.5 Flash",
  description:
    "Fast and versatile multimodal model for scaling across diverse tasks",
  params: {
    title: "Gemini 1.5 Flash",
    model: "gemini-1.5-flash-latest",
    contextLength: 1_000_000,
    apiKey: "<API_KEY>",
  },
  icon: "gemini.png",
  providerOptions: ["gemini"],
  isOpenSource: false,
};

export const deepseek: ModelPackage = {
  title: "DeepSeek-Coder",
  description:
    "A model pre-trained on 2 trillion tokens including 80+ programming languages and a repo-level corpus.",
  params: {
    title: "DeepSeek-7b",
    model: "deepseek-7b",
    contextLength: 4096,
  },
  icon: "deepseek.png",
  dimensions: [
    {
      name: "Parameter Count",
      description: "The number of parameters in the model",
      options: {
        "1b": {
          model: "deepseek-1b",
          title: "DeepSeek-1b",
        },
        "7b": {
          model: "deepseek-7b",
          title: "DeepSeek-7b",
        },
        "33b": {
          model: "deepseek-33b",
          title: "DeepSeek-33b",
        },
      },
    },
  ],
  providerOptions: ["ollama", "lmstudio", "llamacpp"],
  isOpenSource: true,
};

export const commandR: ModelPackage = {
  title: "Command R",
  description:
    "Command R is a scalable generative model targeting RAG and Tool Use to enable production-scale AI for enterprise.",
  params: {
    model: "command-r",
    contextLength: 128_000,
    title: "Command R",
    apiKey: "",
  },
  providerOptions: ["cohere"],
  icon: "cohere.png",
  isOpenSource: false,
};

export const commandRPlus: ModelPackage = {
  title: "Command R+",
  description:
    "Command R+ is a state-of-the-art RAG-optimized model designed to tackle enterprise-grade workloads",
  params: {
    model: "command-r-plus",
    contextLength: 128_000,
    title: "Command R+",
    apiKey: "",
  },
  providerOptions: ["cohere"],
  icon: "cohere.png",
  isOpenSource: false,
};

export const gpt4turbo: ModelPackage = {
  title: "GPT-4 Turbo",
  description:
    "A faster and more capable version of GPT-4 with longer context length and image support",
  params: {
    model: "gpt-4-turbo",
    contextLength: 128_000,
    title: "GPT-4 Turbo",
  },
  providerOptions: ["openai"],
  icon: "openai.png",
  isOpenSource: false,
};

export const gpt4o: ModelPackage = {
  title: "GPT-4o",
  description:
    "An even faster version of GPT-4 with stronger multi-modal capabilities.",
  params: {
    model: "gpt-4o",
    contextLength: 128_000,
    title: "GPT-4o",
    systemMessage:
      "You are an expert software developer. You give helpful and concise responses.",
  },
  providerOptions: ["openai", "freetrial"],
  icon: "openai.png",
  isOpenSource: false,
};

export const gpt35turbo: ModelPackage = {
  title: "GPT-3.5-Turbo",
  description:
    "A faster, cheaper OpenAI model with slightly lower capabilities",
  params: {
    model: "gpt-3.5-turbo",
    contextLength: 8096,
    title: "GPT-3.5-Turbo",
  },
  providerOptions: ["openai", "freetrial"],
  icon: "openai.png",
  isOpenSource: false,
};

export const claude3Opus: ModelPackage = {
  title: "Claude 3 Opus",
  description:
    "Anthropic's most capable model, beating GPT-4 on many benchmarks",
  params: {
    model: "claude-3-opus-20240229",
    contextLength: 200_000,
    title: "Claude 3 Opus",
    apiKey: "",
  },
  providerOptions: ["anthropic"],
  icon: "anthropic.png",
  isOpenSource: false,
};

export const claude3Sonnet: ModelPackage = {
  title: "Claude 3 Sonnet",
  description:
    "The second most capable model in the Claude 3 series: ideal balance of intelligence and speed",
  params: {
    model: "claude-3-sonnet-20240229",
    contextLength: 200_000,
    title: "Claude 3 Sonnet",
    apiKey: "",
  },
  providerOptions: ["anthropic", "freetrial"],
  icon: "anthropic.png",
  isOpenSource: false,
};

export const claude3Haiku: ModelPackage = {
  title: "Claude 3 Haiku",
  description:
    "The third most capable model in the Claude 3 series: fastest and most compact model for near-instant responsiveness",
  params: {
    model: "claude-3-haiku-20240307",
    contextLength: 200_000,
    title: "Claude 3 Haiku",
    apiKey: "",
  },
  providerOptions: ["anthropic", "freetrial"],
  icon: "anthropic.png",
  isOpenSource: false,
};

export const AUTODETECT: ModelPackage = {
  title: "Autodetect",
  description:
    "Automatically populate the model list by calling the /models endpoint of the server",
  params: {
    model: "AUTODETECT",
  } as any,
  providerOptions: [],
  isOpenSource: false,
};