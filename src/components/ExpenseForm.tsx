import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(5, { message: "La descrizione deve essere di almeno 5 caratteri" }),
  amount: z
    .number({ invalid_type_error: "Metti un numero" })
    .min(1, { message: "Nessun numero inserito" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Seleziona una categoria" }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className="mb-5">
      <div className="mb-2">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className="form-select">
          <option value="" selected>
            Select category
          </option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
