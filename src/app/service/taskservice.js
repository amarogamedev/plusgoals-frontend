import ApiService from "../apiservice";

export default class TaskService extends ApiService {
    constructor() {
        super('/tasks')
    }

    findAll() {
        return this.get(``)
    }

    findById(id) {
        return this.get(`/${id}`)
    }

    createTask(data) {
        return this.post(``, data)
    }

    updateTask(id, data) {
        return this.put(`/${id}`, data)
    }

    deleteTask(id) {
        return this.delete(`/${id}`)
    }
}