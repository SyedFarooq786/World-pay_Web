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

        createMany: procedure.input($Schema.ExchangeRateInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeRate.createMany(input as any))),

        create: procedure.input($Schema.ExchangeRateInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeRate.create(input as any))),

        deleteMany: procedure.input($Schema.ExchangeRateInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeRate.deleteMany(input as any))),

        delete: procedure.input($Schema.ExchangeRateInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeRate.delete(input as any))),

        findFirst: procedure.input($Schema.ExchangeRateInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).exchangeRate.findFirst(input as any))),

        findMany: procedure.input($Schema.ExchangeRateInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).exchangeRate.findMany(input as any))),

        findUnique: procedure.input($Schema.ExchangeRateInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).exchangeRate.findUnique(input as any))),

        updateMany: procedure.input($Schema.ExchangeRateInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeRate.updateMany(input as any))),

        update: procedure.input($Schema.ExchangeRateInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exchangeRate.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ExchangeRateCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeRateCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeRateCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeRateCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ExchangeRateCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeRateCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExchangeRateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ExchangeRateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeRateCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeRateCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExchangeRateGetPayload<T>, Context>) => Promise<Prisma.ExchangeRateGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ExchangeRateDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeRateDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeRateDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeRateDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ExchangeRateDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeRateDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExchangeRateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ExchangeRateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeRateDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeRateDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExchangeRateGetPayload<T>, Context>) => Promise<Prisma.ExchangeRateGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ExchangeRateFindFirstArgs, TData = Prisma.ExchangeRateGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ExchangeRateFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ExchangeRateGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExchangeRateFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExchangeRateFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ExchangeRateGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ExchangeRateGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ExchangeRateFindManyArgs, TData = Array<Prisma.ExchangeRateGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ExchangeRateFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ExchangeRateGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExchangeRateFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExchangeRateFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ExchangeRateGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ExchangeRateGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ExchangeRateFindUniqueArgs, TData = Prisma.ExchangeRateGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ExchangeRateFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ExchangeRateGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExchangeRateFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExchangeRateFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ExchangeRateGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ExchangeRateGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ExchangeRateUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeRateUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeRateUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeRateUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ExchangeRateUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExchangeRateUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExchangeRateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ExchangeRateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExchangeRateUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExchangeRateUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExchangeRateGetPayload<T>, Context>) => Promise<Prisma.ExchangeRateGetPayload<T>>
            };

    };
}
