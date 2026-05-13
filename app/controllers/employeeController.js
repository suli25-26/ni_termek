import Employee from "../models/employee.js"

const EmployeeController = {
    index: async (req, res) => {
        const employees = await Employee.findAll()
        res.json(employees)
    },
    store: async (req, res) => {
        const employee = await Employee.create(req.body)
        res.status(201).json(employee)
    },
    update: async (req, res) => {
        const employee = await Employee.update(req.body, {
            where: { id: req.params.id }
        })
        res.json(employee)
    },
    delete: async (req, res) => {
        const employee = await Employee.destroy({
            where: { id: req.params.id }
        })
        res.json(employee)
    }
}

export default EmployeeController
