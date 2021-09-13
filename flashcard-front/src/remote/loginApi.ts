import { Member } from "../models/member";
import loginClient from "./loginClient";

export const apiLogin = async (member:Member):Promise<Member> => {
	const response = await loginClient.post<Member>('/user', member);

	if (response.status===200) {
		return response.data;
	}

	return member;
}
