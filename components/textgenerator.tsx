"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function TextGenerateEffectDemo({
  message, 
  size,
  delay,
}: {
  message: string;
  size: string;
  delay: number;
}) {
  return <TextGenerateEffect words={message} size={size} delay={0.1}/>;
}

export default TextGenerateEffectDemo;