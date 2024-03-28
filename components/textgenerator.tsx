"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

interface MessageProps {
  message: string;
}

export function TextGenerateEffectDemo({message}: MessageProps) {
  return <TextGenerateEffect words={message} />;
}

export default TextGenerateEffectDemo;