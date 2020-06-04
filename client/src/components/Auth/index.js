import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Auth from './style';
import { Input, Button } from '../globalStyles';

// form validation for confirm Password borrowed from
// https://codesandbox.io/s/l2r832l8x7?file=/src/index.js:262-460

const AuthComponent = () => {
	const formik = useFormik({
		initialValues: { email: '', password: '', confirm: '' },
		validationSchema: Yup.object({
			email: Yup.string().email('Please enter a valid email').required('Email is Required'),
			password: Yup.string().min(6, 'Password must be 6 characters or more').required('Password is Required'),
			confirm: Yup.string().when('password', {
				is: (val) => (val && val.length > 0 ? true : false),
				then: Yup.string().oneOf([ Yup.ref('password') ], 'Both password need to be the same')
			})
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});
	return (
		<Auth>
			<Auth.Wrapper className="container">
				<Auth.Title>Sign Up for Chuck Noriss Jokes</Auth.Title>
				<Auth.Form onSubmit={formik.handleSubmit}>
					<Input.Wrapper>
						<Input
							type="email"
							name="email"
							placeholder="Email"
							{...formik.getFieldProps('email')}
						/>
						{formik.touched.email && formik.errors.email ? (
							<small className="form-errors">{formik.errors.email}</small>
						) : null}
					</Input.Wrapper>
					<Input.Wrapper>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							{...formik.getFieldProps('password')}
						/>
						{formik.touched.password && formik.errors.password ? (
							<small className="form-errors">{formik.errors.password}</small>
						) : null}
					</Input.Wrapper>
					<Input.Wrapper>
						<Input
							type="password"
							name="confirm"
							placeholder="Confirm Password"
							{...formik.getFieldProps('confirm')}
						/>
						{formik.touched.confirm && formik.errors.confirm ? (
							<small className="form-errors">{formik.errors.confirm}</small>
						) : null}
					</Input.Wrapper>
					<Input.Wrapper>
						<Button large type="submit">
							Submit
						</Button>
						<div style={{ textAlign: 'right' }}>
							<small>
								Already have an account?{' '}
								<a className="sign-in" href="#">
									Sign in
								</a>
							</small>
						</div>
					</Input.Wrapper>
				</Auth.Form>
			</Auth.Wrapper>
		</Auth>
	);
};

export default AuthComponent;
