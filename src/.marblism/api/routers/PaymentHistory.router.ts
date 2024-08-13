/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PaymentHistoryInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentHistory.createMany(input as any))),

        create: procedure.input($Schema.PaymentHistoryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentHistory.create(input as any))),

        deleteMany: procedure.input($Schema.PaymentHistoryInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentHistory.deleteMany(input as any))),

        delete: procedure.input($Schema.PaymentHistoryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentHistory.delete(input as any))),

        findFirst: procedure.input($Schema.PaymentHistoryInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).paymentHistory.findFirst(input as any))),

        findMany: procedure.input($Schema.PaymentHistoryInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).paymentHistory.findMany(input as any))),

        findUnique: procedure.input($Schema.PaymentHistoryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).paymentHistory.findUnique(input as any))),

        updateMany: procedure.input($Schema.PaymentHistoryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentHistory.updateMany(input as any))),

        update: procedure.input($Schema.PaymentHistoryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentHistory.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PaymentHistoryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentHistoryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentHistoryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentHistoryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PaymentHistoryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentHistoryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentHistoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentHistoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentHistoryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentHistoryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentHistoryGetPayload<T>, Context>) => Promise<Prisma.PaymentHistoryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PaymentHistoryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentHistoryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentHistoryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentHistoryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PaymentHistoryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentHistoryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentHistoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentHistoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentHistoryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentHistoryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentHistoryGetPayload<T>, Context>) => Promise<Prisma.PaymentHistoryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PaymentHistoryFindFirstArgs, TData = Prisma.PaymentHistoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PaymentHistoryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PaymentHistoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentHistoryFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaymentHistoryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PaymentHistoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PaymentHistoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PaymentHistoryFindManyArgs, TData = Array<Prisma.PaymentHistoryGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PaymentHistoryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PaymentHistoryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentHistoryFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaymentHistoryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PaymentHistoryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PaymentHistoryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PaymentHistoryFindUniqueArgs, TData = Prisma.PaymentHistoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PaymentHistoryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PaymentHistoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentHistoryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaymentHistoryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PaymentHistoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PaymentHistoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PaymentHistoryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentHistoryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentHistoryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentHistoryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PaymentHistoryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentHistoryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentHistoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentHistoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentHistoryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentHistoryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentHistoryGetPayload<T>, Context>) => Promise<Prisma.PaymentHistoryGetPayload<T>>
            };

    };
}
