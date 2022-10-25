import ApiService from "../apiservice";

export default class GoalService extends ApiService {
    constructor() {
        super('/goals')
    }

    findAll() {
        return this.get(``)
    }

    findById(id) {
        return this.get(`/${id}`)
    }

    findAllTasks(id) {
        return this.get(`/${id}/tasks`)
    }

    createGoal(data) {
        return this.post(``, data)
    }

    updateGoal(id, data) {
        return this.put(`/${id}`, data)
    }

    deleteGoal(id) {
        return this.delete(`/${id}`)
    }
}