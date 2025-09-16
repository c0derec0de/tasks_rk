import { Logs } from "@/shared/types";

const MAX_COUNT = 10;

function lruCache<T>(maxCount: number) {
  const logsCache: T[] = [];

  return {
    add: (log: T): void => {
      if (logsCache.length >= maxCount) {
        logsCache.pop();
      }
      logsCache.unshift(log);
    },

    getAll: (): T[] => {
      return [...logsCache];
    },

    getByIndex: (index: number): T => {
      return logsCache[index];
    },
    size: (): number => {
      return logsCache.length;
    },
    isEmpty: (): boolean => {
      return logsCache.length === 0;
    },
  };
}

export const visitLogs = lruCache<Logs>(MAX_COUNT);
