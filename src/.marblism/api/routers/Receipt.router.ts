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

        createMany: procedure.input($Schema.ReceiptInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).receipt.createMany(input as any))),

        create: procedure.input($Schema.ReceiptInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).receipt.create(input as any))),

        deleteMany: procedure.input($Schema.ReceiptInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).receipt.deleteMany(input as any))),

        delete: procedure.input($Schema.ReceiptInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).receipt.delete(input as any))),

        findFirst: procedure.input($Schema.ReceiptInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).receipt.findFirst(input as any))),

        findMany: procedure.input($Schema.ReceiptInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).receipt.findMany(input as any))),

        findUnique: procedure.input($Schema.ReceiptInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).receipt.findUnique(input as any))),

        updateMany: procedure.input($Schema.ReceiptInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).receipt.updateMany(input as any))),

        update: procedure.input($Schema.ReceiptInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).receipt.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ReceiptCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReceiptCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReceiptCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReceiptCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ReceiptCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReceiptCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReceiptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReceiptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReceiptCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReceiptCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReceiptGetPayload<T>, Context>) => Promise<Prisma.ReceiptGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ReceiptDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReceiptDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReceiptDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReceiptDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ReceiptDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReceiptDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReceiptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReceiptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReceiptDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReceiptDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReceiptGetPayload<T>, Context>) => Promise<Prisma.ReceiptGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ReceiptFindFirstArgs, TData = Prisma.ReceiptGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ReceiptFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReceiptGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReceiptFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReceiptFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReceiptGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ReceiptGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ReceiptFindManyArgs, TData = Array<Prisma.ReceiptGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ReceiptFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ReceiptGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReceiptFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReceiptFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ReceiptGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ReceiptGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ReceiptFindUniqueArgs, TData = Prisma.ReceiptGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ReceiptFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReceiptGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReceiptFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReceiptFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReceiptGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ReceiptGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ReceiptUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReceiptUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReceiptUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReceiptUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ReceiptUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ReceiptUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ReceiptGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ReceiptGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ReceiptUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ReceiptUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReceiptGetPayload<T>, Context>) => Promise<Prisma.ReceiptGetPayload<T>>
            };

    };
}
