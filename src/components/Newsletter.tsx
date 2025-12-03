"use client";

import { mailchimp } from "@/app/resources";
import { Button, Flex, Heading, Input, Text, Background, Column } from "@/once-ui/components";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email) || !email) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: mailchimp.effects.mask.cursor,
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
          opacity: mailchimp.effects.gradient.opacity as any,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          color: mailchimp.effects.dots.color,
          size: mailchimp.effects.dots.size as any,
          opacity: mailchimp.effects.dots.opacity as any,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width as any,
          height: mailchimp.effects.grid.height as any,
          opacity: mailchimp.effects.grid.opacity as any,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as any,
        }}
      />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text
        className="hide-on-mobile"
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      
      {status === "success" ? (
        <Flex fillWidth horizontal="center" padding="m">
          <Text variant="body-default-m" onBackground="success-medium">
            Thanks for subscribing! Check your inbox for a welcome email.
          </Text>
        </Flex>
      ) : (
        <form
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <Flex fillWidth maxWidth={24} gap="8" direction="column">
            <Flex fillWidth gap="8">
                <Input
                formNoValidate
                labelAsPlaceholder
                id="email"
                name="email"
                type="email"
                label="Email"
                required
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={error}
                disabled={status === "loading"}
                />
                <Button 
                    id="subscribe" 
                    value="Subscribe" 
                    size="m" 
                    fillWidth 
                    loading={status === "loading"}
                    variant="primary"
                >
                Subscribe
                </Button>
            </Flex>
          </Flex>
        </form>
      )}
    </Column>
  );
};
