import Employee from "../models/employee.js"

const EmployeeController = {
    index: async (req, res) => {
        const employees = await Employee.findAll()
        res.json(employees)
    },
    store: async (req, res) => {
        const employee = await Employee.create(req.body)
        res.json(employee)
    }
}

export default EmployeeController
