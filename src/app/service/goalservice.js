import ApiService from "../apiservice";

export default class GoalService extends ApiService {

    constructor() {
        super(`/`);
    }

    findAll() {
        return this.get(`goals`)
    }

    findById(id) {
        return this.get(`goals/${id}`)
    }

    findAllTasksByGoalId(id) {
        return this.get(`goals/${id}/tasks`)
    }

    createGoal(data) {
        return this.post(`goals`, data)
    }

    updateGoal(id, data) {
        return this.put(`goals/${id}`, data)
    }

    deleteGoal(id) {
        return this.delete(`goals/${id}`)
    }
    
    findAllTasks() {
        return this.get(`tasks`)
    }

    findTaskById(id) {
        return this.get(`tasks/${id}`)
    }

    createTask(data) {
        return this.post(`tasks`, data)
    }

    updateTask(id, data) {
        return this.put(`tasks/${id}`, data)
    }

    deleteTask(id) {
        return this.delete(`tasks/${id}`)
    }
}