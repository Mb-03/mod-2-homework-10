"use client";
import registerScheme from "@/constants/RegisterScheme";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

type Input = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(registerScheme),
  });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-100 to-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-rose-600 mb-4">
          Register
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="John"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-400 focus:outline-none"
          />
          {errors.name && (
            <span className="mt-4 text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Doe"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-400 focus:outline-none"
          />
        </div>
        {errors.lastName && (
          <span className="text-red-500 mb-2">{errors.lastName.message}</span>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-400 focus:outline-none"
          />
        </div>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+1 234 567 890"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-400 focus:outline-none"
          />
        </div>
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Your message..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-400 focus:outline-none resize-none"
          />
        </div>
        {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
        )}

        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 rounded-lg font-medium hover:bg-rose-600 transition duration-200"
        >
          Register
        </button>
        <Link
          href="/dashboard/posts"
          className="w-full bg-rose-500 text-white py-2 rounded-lg font-medium hover:bg-rose-600 transition duration-200 flex justify-center"
        >
          Skip Registration
        </Link>
      </form>
    </div>
  );
};

export default Form;
