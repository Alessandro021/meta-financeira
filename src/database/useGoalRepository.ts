/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useSQLiteContext} from "expo-sqlite/next";


export interface GoalCreateDatabase {
    name: string
    total: number
}


export interface GoalResponseDatabase {
    id: string
    name: string
    total: number
    current: number
}


export const useGoalRepository = () => {
	const database = useSQLiteContext();


	const create = (goal: GoalCreateDatabase) => {
		try {
			const statement = database.prepareSync(
				"INSERT INTO goals (name, total) VALUES ($name, $total)"
			);
    
			statement.executeSync({
				$name: goal.name,
				$total: goal.total
			});
		} catch (error) {
			throw error;
		}
	};

	const all = () => {
		try {
			return database.getAllSync<GoalResponseDatabase>(`
                SELECT g.id, g.name, g.total, COALESCE(SUM(t.amount), 0) AS current
                FROM goals AS g
                LEFT JOIN transactions t ON t.goal_id = g.id
                GROUP BY g.id, g.name, g.total;
            `);
		} catch (error) {
			throw error;
		}
	};

	const show = (id: number) => {
		try {
			const statement = database.prepareSync(`
            SELECT g.id, g.name, g.total, COALESCE(SUM(t.amount), 0) AS current
            FROM goals AS g
            LEFT JOIN transactions t ON t.goal_id = g.id
            WHERE g.id = $id
            GROUP BY g.id, g.name, g.total;
        `);

			const result = statement.executeSync<GoalResponseDatabase>({$id: id});

			return result.getFirstSync();
		} catch (error) {
			throw error;
		}
	};

	const deleteGoal = (id: number) => {
		try {
			// Primeiro, exclui as transações associadas ao objetivo
			const deleteTransactionsStatement = database.prepareSync(`
                DELETE FROM transactions WHERE goal_id = $id
            `);
			deleteTransactionsStatement.executeSync({$id: id});
    
			// Em seguida, exclui o objetivo
			const deleteGoalStatement = database.prepareSync(`
                DELETE FROM goals WHERE id = $id
            `);
			deleteGoalStatement.executeSync({$id: id});
		} catch (error) {
			throw error;
		}
	};

	return{
		create,
		all,
		show,
		deleteGoal
	};
};