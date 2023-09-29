import type { Request, Response } from "express";
import { CreateUserRequestDTO } from "../dtos";
import { CreateUserUseCase } from "../use-cases/create-user.use-case";


// name, age, password
export async function create(request: Request, response: Response) {
    const data = new CreateUserRequestDTO({
        ...request.body
    }, ['age'])

    const createdUserDTO = new CreateUserUseCase().execute(data)

    return response.json(createdUserDTO.getAll());
}

// id
export async function remove(request: Request, response: Response) {
    return response.send();
}

// DTO + ZOD