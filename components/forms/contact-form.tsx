"use client";

import { type SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormSchema,
  type ContactFormInputs,
} from "./contact-form-schema";
import { toast } from "sonner";
import { sendEmail } from "@/lib/server-actions/send-mail";
import { type Dictionary } from "@/i18/get-dictionary";
import { Card, CardContent } from "../ui/card";

type Props = {
  dictionary: Dictionary["contactPage"]["contactForm"];
};

export const ContactForm = ({
  dictionary: {
    name,
    email,
    message,
    toast: { error, success },
    send,
    submitting,
  },
}: Props) => {
  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    const response = await sendEmail(data);

    if (response?.error) {
      toast.error(error);
      return;
    }
    toast.success(success);
    reset();
  };

  return (
    <Card className="mx-auto mt-6 max-w-4xl">
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 max-w-4xl lg:flex-auto"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name */}
            <div className="col-span-2 md:col-span-1">
              <Input
                id="name"
                type="text"
                placeholder={name}
                autoComplete="given-name"
                {...register("name")}
              />
              {errors.name?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="col-span-2 md:col-span-1">
              <Input
                id="email"
                type="email"
                placeholder={email}
                autoComplete="given-email"
                {...register("email")}
              />
              {errors.name?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="col-span-2">
              <Textarea
                id="message"
                placeholder={message}
                {...register("message")}
              />
              {errors.message?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            variant="default"
            disabled={isSubmitting}
            className="mt-4 w-full hover:bg-primary/50 disabled:opacity-50"
          >
            {isSubmitting ? submitting : send}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
