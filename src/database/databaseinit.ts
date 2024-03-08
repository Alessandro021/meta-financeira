/* eslint-disable @typescript-eslint/no-unused-vars */
import {SQLiteDatabase} from "expo-sqlite/next";

export const databaseInit = async (database: SQLiteDatabase)=> {
	await database.execAsync(`
        PRAGMA journal_mode = 'wal';

        CREATE TABLE IF NOT EXISTS goals (
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT NOT NULL,
            total REAL NOT NULL
        );

        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY NOT NULL,
            goal_id INTEGER,
            amount REAL NOT NULL,
            date DEFAULT CURRENT_TIMESTAMP
        );
    `);
};