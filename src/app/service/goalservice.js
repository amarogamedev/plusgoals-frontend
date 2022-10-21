import ApiService from "../apiservice";

class GoalService extends ApiService {
    constructor() {
        super('/goals')
    }

    findAll() {
        return this.get()
    }

    findById(id) {
        return this.get(`/${id}`)
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

export default GoalService;