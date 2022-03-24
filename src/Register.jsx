import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  // const obSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <form noValidate /*onSubmit={handleSubmit(obSubmit)}*/>
        <div className="mb-3 form-floating">
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="name@gmail.com"
            {...register("email", {
              required: {
                value: true,
                message: "Email là bắt buộc",
              },
              validate: {
                email: (value) =>
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    value
                  ) || "Email không đúng định dạng",
              },
            })}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Viet"
            {...register("name", {
              required: {
                value: true,
                message: "tên là bắt buộc",
              },
              minLength: {
                value: 2,
                message: "Tên từ 2 - 160 kí tự",
              },
              maxLength: {
                value: 160,
                message: "Tên từ 2 - 160 kí tự",
              },
            })}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="nation"
              id="VietNam"
              {...Register("nation", {
                require: {
                  value: true,
                  message: "Trường này là bắt buộc",
                },
              })}
            />
            <label htmlFor="VietNam" className="form-check-label">
              Việt Nam
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="nation"
              id="Aboard"
              {...Register("nation", {
                require: {
                  value: true,
                  message: "Trường này là bắt buộc",
                },
              })}
            />
            <label htmlFor="Aboard" className="form-check-label">
              Aboard
            </label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="gym"
              name="hobby"
              value="gym"
              {...Register("hobby", {
                require: {
                  value: true,
                  message: "Trường này là bắt buộc",
                },
              })}
            />
            <label htmlFor="gym" className="form-check-label">
              Gym
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="other"
              name="hobby"
              value="other"
              {...Register("hobby", {
                require: {
                  value: true,
                  message: "Trường này là bắt buộc",
                },
              })}
            />
            <label htmlFor="other" className="form-check-label">
              Other
            </label>
          </div>
        </div>
        <div className="mb-3">
          <select
            name="sex"
            className="form-select"
            {...Register("sex", {
              require: {
                value: true,
                message: "Trường này là bắt buộc",
              },
            })}
          >
            <option value="">Sex</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="***"
            {...Register("password", {
              require: {
                value: true,
                message: "mật khẩu  là bắt buộc",
              },
              minLength: {
                value: 8,
                message: "Mật khẩu từ 8 - 160 kí tự",
              },
              maxLength: {
                value: 160,
                message: "Mật khẩu từ 8 - 160 kí tự",
              },
            })}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            placeholder="***"
            {...Register("confirmPassword", {
              require: {
                value: true,
                message: "trường này là bắt buộc",
              },
              validate: {
                samePassword: (value) =>
                  value === getValues("password") || "Mật khẩu không khớp",
              },
            })}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
